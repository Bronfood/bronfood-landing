import { Globe, Send, Wallet, Info } from "lucide-react"

const capabilities = [
  {
    icon: <Globe className="size-5" />,
    title: "Приём онлайн-заказов",
    description: "Приём и обработка заказов через цифровую платформу.",
  },
  {
    icon: <Send className="size-5" />,
    title: "Передача информации",
    description: "Передача информации о заказе заведению.",
  },
  {
    icon: <Wallet className="size-5" />,
    title: "Приём платежей",
    description: "Приём безналичных платежей через платёжного провайдера.",
  },
]

export function RoleSection() {
  return (
    <section className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Роль Bronfood"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Оператор цифровой платформы"}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                {cap.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-secondary/50 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" />
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>
                {"Bronfood не производит приготовление еды и не осуществляет доставку. Ответственность за качество приготовленных блюд несёт соответствующее заведение общественного питания."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
