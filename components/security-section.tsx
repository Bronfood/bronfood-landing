import { ShieldCheck, Lock, ServerOff } from "lucide-react"

const securityPoints = [
  {
    icon: <ShieldCheck className="size-6" />,
    title: "Платёжный провайдер",
    description: "Безопасность онлайн-платежей обеспечивается платёжным провайдером.",
  },
  {
    icon: <Lock className="size-6" />,
    title: "Протокол HTTPS",
    description: "Передача данных осуществляется по защищённому протоколу HTTPS.",
  },
  {
    icon: <ServerOff className="size-6" />,
    title: "Данные не хранятся",
    description: "Данные банковских карт не сохраняются на стороне Bronfood.",
  },
]

export function SecuritySection() {
  return (
    <section className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Безопасность платежей"}
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {securityPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-background p-8 text-center transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                {point.icon}
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
