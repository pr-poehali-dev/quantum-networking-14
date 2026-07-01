export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Стоимость без скрытых сюрпризов</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Наше ценообразование — это открытый диалог. Публикуем прайс-лист на массовые услуги
          и всегда готовы предоставить подробную смету для взвешенного решения.
        </p>
        <div className="flex flex-col gap-4 text-sm text-neutral-600 mb-8">
          <div><span className="font-semibold text-neutral-900">Грузчик / разнорабочий</span> — от 485 ₽/час</div>
          <div><span className="font-semibold text-neutral-900">Фасовка / копакинг</span> — от 485 ₽/час</div>
          <div><span className="font-semibold text-neutral-900">Спецтехника (ВЭШ, погрузчик)</span> — от 670 ₽/час</div>
          <div><span className="font-semibold text-neutral-900">Комплектация / инвентаризация</span> — от 520 ₽/час</div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Запросить расчёт
        </button>
      </div>
    </div>
  );
}