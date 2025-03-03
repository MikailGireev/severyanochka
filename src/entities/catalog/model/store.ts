import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCatalogStore = defineStore('counter', () => {
  const catalog = reactive({
    sections: [
      { label: 'Молоко, сыр, яйцо', link: '/' },
      { label: 'Напитки', link: '/' },
      { label: 'Бакалея', link: '/' },
      { label: 'Непродовольственные товары', link: '/' },
      { label: 'Хлеб', link: '/' },
      { label: 'Кондитерские изделия', link: '/' },
      { label: 'Здоровое питание', link: '/' },
      { label: 'Детское питание', link: '/' },
      { label: 'Фрукты и овощи', link: '/' },
      { label: 'Чай, кофе', link: '/' },
      { label: 'Зоотовары', link: '/' },
      { label: 'Мясо, птица, колбаса', link: '/' },
      { label: 'Замороженные продукты', link: '/' },
    ],
  });

  const setCatalogSections = ()

  return {};
});
