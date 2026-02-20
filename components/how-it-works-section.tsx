import { MapPin, ShoppingCart, CreditCard, Bell, Package, Monitor, CheckCircle, ChefHat, HandshakeIcon } from "lucide-react"

const clientSteps = [
  {
    icon: <MapPin className="size-5" />,
    step: "01",
    title: "Выберите заведение",
    description: "Выберите заведение на карте.",
  },
  {
    icon: <ShoppingCart className="size-5" />,
    step: "02",
    title: "Сформируйте заказ",
    description: "Добавьте блюда в корзину.",
  },
  {
    icon: <CreditCard className="size-5" />,
    step: "03",
    title: "Оплатите онлайн",
    description: "Произведите оплату банковской картой.",
  },
  {
    icon: <Bell className="size-5" />,
    step: "04",
    title: "Получите уведомление",
    description: "Получите уведомление о принятии заказа.",
  },
  {
    icon: <Package className="size-5" />,
    step: "05",
    title: "Заберите заказ",
    description: "Самостоятельно заберите заказ в заведении.",
  },
]

const venueSteps = [
  {
    icon: <Monitor className="size-5" />,
    step: "01",
    title: "Получите заказ",
    description: "Заведение получает заказ через административную панель.",
  },
  {
    icon: <CheckCircle className="size-5" />,
    step: "02",
    title: "Подтвердите",
    description: "Подтвердите заказ.",
  },
  {
    icon: <ChefHat className="size-5" />,
    step: "03",
    title: "Приготовьте",
    description: "Готовьте заказ к указанному времени.",
  },
  {
    icon: <HandshakeIcon className="size-5" />,
    step: "04",
    title: "Передайте клиенту",
    description: "Передайте заказ клиенту при самовывозе.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Как работает сервис"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Простой процесс для клиентов и заведений"}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 flex items-center gap-3 text-lg font-semibold text-foreground">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {"K"}
              </span>
              {"Для клиента"}
            </h3>
            <div className="flex flex-col gap-6">
              {clientSteps.map((step) => (
                <StepCard key={step.step} {...step} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-3 text-lg font-semibold text-foreground">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {"З"}
              </span>
              {"Для заведения"}
            </h3>
            <div className="flex flex-col gap-6">
              {venueSteps.map((step) => (
                <StepCard key={step.step} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode
  step: string
  title: string
  description: string
}) {
  return (
    <div className="group flex items-start gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-accent/40 hover:shadow-sm">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
        {icon}
      </div>
      <div>
        <span className="mb-1 block text-xs font-medium text-accent">
          {"Шаг "}{step}
        </span>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
