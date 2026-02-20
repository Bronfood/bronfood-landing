import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Является ли Bronfood службой доставки?",
    answer:
      "Нет. Bronfood — сервис заказа еды на вынос (самовывоз).",
  },
  {
    question: "Кому я оплачиваю заказ?",
    answer:
      "Оплата производится через платёжного провайдера на счёт сервиса Bronfood.",
  },
  {
    question: "Безопасны ли платежи?",
    answer:
      "Да. Обработка карт осуществляется платёжным провайдером по стандарту PCI DSS.",
  },
  {
    question: "Можно ли отменить заказ?",
    answer:
      "Да, в случаях, предусмотренных правилами возврата.",
  },
  {
    question: "Есть ли автоматические списания?",
    answer:
      "Нет. Оплата производится только вручную при оформлении заказа.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Часто задаваемые вопросы"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Ответы на популярные вопросы о сервисе"}
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
