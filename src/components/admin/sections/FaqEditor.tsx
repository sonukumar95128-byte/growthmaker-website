"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea } from "@/components/admin/FormFields";
import type { Faq } from "@/lib/types";

export default function FaqEditor({
  faqs,
  onChange,
}: {
  faqs: Faq[];
  onChange: (faqs: Faq[]) => void;
}) {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-bg-soft">Frequently Asked Questions</h3>
      <div className="mt-4">
        <ArrayEditor
          label="FAQ"
          items={faqs}
          newItem={() => ({ question: "", answer: "" })}
          onChange={onChange}
          renderItem={(faq, _i, update) => (
            <>
              <LabeledInput
                label="Question"
                value={faq.question}
                onChange={(v) => update({ ...faq, question: v })}
              />
              <LabeledTextarea
                label="Answer"
                value={faq.answer}
                onChange={(v) => update({ ...faq, answer: v })}
              />
            </>
          )}
        />
      </div>
    </div>
  );
}
