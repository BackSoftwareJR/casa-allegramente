type Props = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, align = 'center' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-castagno-forest sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-lg text-castagno-muted">{subtitle}</p> : null}
    </div>
  )
}
