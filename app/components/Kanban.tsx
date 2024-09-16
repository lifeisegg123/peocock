import { DragEndEvent, DragOverEvent } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { startTransition, useId, useState } from "react";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import { DnD } from "./Dnd";
import * as R from "remeda";

const dndItems = Array.from({ length: 3 }).map((_, i) => ({
  id: `${i}`,
  values: Array.from({ length: 5 }).map((_, ii) => ({
    id: `${i}_${ii}`,
    value: `${i * 10 + ii}번 item`,
  })),
}));

export function Kanban() {
  const [dnd, setDnd] = useState(dndItems);

  const findColumn = (id: string | null) =>
    id ? dnd.find((col) => col.values.find((task) => task.id === id)) : null;

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over, delta } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;

    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return null;
    }
    startTransition(() => {
      setDnd((prevState) => {
        const activeItems = activeColumn.values;
        const overItems = overColumn.values;
        const activeIndex = activeItems.findIndex((i) => i.id === activeId);
        const overIndex = overItems.findIndex((i) => i.id === overId);

        const newIndex = () => {
          if (overIndex === 0) {
            return delta.y < 0 ? overIndex : overIndex + 1;
          } else if (overIndex === overItems.length - 1 && delta.y > 0) {
            return overIndex + 1;
          } else {
            return overIndex >= 0 ? overIndex : overItems.length;
          }
        };

        return prevState.map((column) => {
          if (column.id === activeColumn.id) {
            return {
              ...column,
              values: activeItems.filter((i) => i.id !== activeId),
            };
          } else if (column.id === overColumn.id) {
            const newInsertIndex = newIndex();
            const activeItem = activeItems[activeIndex];

            if (activeItem) {
              return {
                ...column,
                values: [
                  ...overItems.slice(0, newInsertIndex),
                  activeItem,
                  ...overItems.slice(newInsertIndex),
                ],
              };
            }
          }
          return column;
        });
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(active, over);
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeType = active.data.current?.type;
    if (activeType === "Lane") {
      const activeIndex = dnd.findIndex((v) => v.id === activeId);
      const overIndex = dnd.findIndex((v) => v.id === overId);
      setDnd((prev) => arrayMove(prev, activeIndex, overIndex));
    } else {
      const activeColumn = findColumn(activeId);
      const overColumn = findColumn(overId);
      if (!activeColumn || !overColumn || activeColumn !== overColumn) {
        return null;
      }
      const activeIndex = activeColumn.values.findIndex(
        (i) => i.id === activeId
      );
      const overIndex = overColumn.values.findIndex((i) => i.id === overId);
      if (activeIndex !== overIndex) {
        setDnd((prevState) => {
          return prevState.map((column) => {
            if (column.id === activeColumn.id) {
              return {
                id: column.id,
                values: arrayMove(overColumn.values, activeIndex, overIndex),
              };
            } else {
              return column;
            }
          });
        });
      }
    }
  };

  const id = useId();
  const createId = (str: string) => `${id}-${str}`;

  return (
    <DnD
      id={createId("root")}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <ul className={hstack({ alignItems: "stretch", height: "240" })}>
        <DnD.SortableRoot
          id={createId("sortable-row-root")}
          items={dnd}
          strategy={horizontalListSortingStrategy}
        >
          {dnd.map((v) => (
            <DnD.Sortable
              className={css({ height: "100%", overflow: "auto" })}
              key={v.id}
              sortableOptions={{ id: v.id, data: { type: "Lane" } }}
            >
              <ul
                className={vstack({
                  background: "BG/Background",
                  color: "Black/10",
                  p: "8",
                  borderRadius: "4",
                })}
              >
                <div>{v.id} 열</div>
                <DnD.SortableRoot
                  id={createId(`sortable-${id}-column-root`)}
                  items={v.values}
                  strategy={verticalListSortingStrategy}
                >
                  {v.values.map((vv) => (
                    <DnD.Sortable
                      key={vv.id}
                      sortableOptions={{
                        id: vv.id,
                        data: { type: "Task" },
                      }}
                      className={css({
                        p: "8",
                      })}
                    >
                      {vv.value}
                    </DnD.Sortable>
                  ))}
                </DnD.SortableRoot>
              </ul>
            </DnD.Sortable>
          ))}
        </DnD.SortableRoot>
      </ul>
    </DnD>
  );
}
