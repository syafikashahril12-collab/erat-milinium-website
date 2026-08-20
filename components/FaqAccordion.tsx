"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };
type FaqGroup = { category: string; items: FaqItem[] };

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <div className="space-y-12">
      {groups.map((group, gi) => (
        <div key={group.category}>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-rig">
            {group.category}
          </p>
          <div className="horizon-rule-thin mt-3 w-16" />

          <div className="mt-2 divide-y divide-steel/30 border-y border-steel/30">
            {group.items.map((item, ii) => {
              const id = `${gi}-${ii}`;
              const isOpen = openId === id;
              return (
                <div key={item.question}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : id)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm uppercase tracking-wide text-harbor md:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 text-xl text-rig transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 pr-8 text-sm text-harbor/70">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
