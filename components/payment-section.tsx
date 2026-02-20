import { Shield, Lock, CreditCard, CheckCircle, AlertTriangle } from "lucide-react"

const paymentPoints = [
  {
    icon: <CreditCard className="size-5" />,
    text: "Оплата заказов осуществляется онлайн банковскими картами платёжных систем Visa и Mastercard через интернет-эквайринг.",
  },
  {
    icon: <Lock className="size-5" />,
    text: "После подтверждения заказа пользователь перенаправляется на защищённую платёжную страницу платёжного провайдера.",
  },
  {
    icon: <Shield className="size-5" />,
    text: "Обработка данных банковских карт осуществляется платёжным провайдером и соответствует стандарту безопасности PCI DSS.",
  },
  {
    icon: <CheckCircle className="size-5" />,
    text: "Bronfood не получает и не хранит данные банковских карт пользователей.",
  },
  {
    icon: <AlertTriangle className="size-5" />,
    text: "В отдельных случаях может применяться технология 3-D Secure для дополнительного подтверждения операции.",
  },
  {
    icon: <CheckCircle className="size-5" />,
    text: "После успешной оплаты заказ передаётся заведению для исполнения.",
  },
]

export function PaymentSection() {
  return (
    <section id="payment" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Порядок оплаты услуг"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Безопасная онлайн-оплата через сертифицированного провайдера"}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {paymentPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                {point.icon}
              </div>
              <p className="text-sm leading-relaxed text-foreground">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
