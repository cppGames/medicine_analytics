export function get_data() {
  return [{
      name: 'Входные параметры',
      params: [{
        id: 'Registry_TerritoryCode',
        name: 'Регион',
        items: [
          'Архангельская область',
          'Брянская область',
          'Вологодская область',
          'Алтайский край',
          'Амурская область',
          'Астраханская область'
        ]
      },{
          id: 'cancer_type_cut',
          name: 'Вид рака',
          items: ['C15', 'C16', 'C18', 'C19', 'C20', 'C22', 'C25']
        }, {
          id: 'cancer_stage_cut',
          name: 'Стадия рака',
          items: [1, 2, 3, 4]
        }, {
          id: 'RegistryZapZsl_forPom',
          name: 'Вид помощи',
          items: [
            'Неотложная',
            'Плановая',
            'Экстренная'
          ]
        }, {
          id: 'reason_of_appeal',
          name: 'Причина появления',
          items: [
            'Диагностика',
            'Динамическое наблюдение',
            'Лечение при рецидиве',
            'Лечение при прогрессировании'
          ]
        }, {
          id: 'gender',
          name: 'Пол',
          items: ['Мужской', 'Женский']
        }, {
          id: 'age_bins',
          name: 'Возростная группа',
          items: [
            'до 18',
            'от 19 до 45',
            'от 46 до 60',
            'от 61 до 65',
            'от 66 до 70',
            'от 71 до 75',
            'от 76 до 80',
            'от 81'
          ]
        }
      ]
    }, {
      name: 'Параметры лечения',
      params: [{
        id: 'kdZ_bins',
        name: 'Продолжительность гопитализации',
        items: [
          'Нет',
          'до 2',
          'от 3 до 5',
          'от 6 до 7',
          'от 8 до 14',
          'от 15'
        ]
      },{
          id: 'sum_bins',
          name: 'Стоимость лечения',
          items: [1, 2, 3, 4, 5],
        }, 
        {
          id: 'radiation_doze_bins',
          name: 'Доза радиации',
          items: [
            'Нет',
            'до 1',
            'от 1 до 12',
            'от 12 до 28',
            'от 28 до 40',
            'от 40 до 50',
            'от 50'
          ],
        }, {
          id: 'days_start_npr_bins',
          name: 'Количество дней до даты направления на лечение',
          items: [0, 1, 2, 3, 4, 5],
        }, {
          id: 'metastasis_bins',
          name: 'Объем метастазиса',
          items: [
            'Нет',
            'до 3',
            'от 3 до 5',
            'от 5 до 15',
            'от 15 до 30',
            'от 30 до 42',
            'от 42 до 80',
            'от 80'
          ]
        }
      ]
    }
  ]
}

function getRandomCompleted(min=1, max=100) {
  return Math.round(Math.random() * (max - min) + min)
}

export function get_new_type() {
  let res = []
  const ids = ['diagnostics', 'antitumor_therapy', 'radiation_therapy', 'nonspecific_treatment', 'chemoradiotherapy', 'surgery']
  const names = ['Диагностика', 'Лекартвенная противоопухолевая терапия', 'Лучевая терапия', 'Неспецифическое лечение', 'Химиолучевая терапия', 'Хирургическое лечение']
  ids.forEach((id, index) => {
    let item = {}
    let good = getRandomCompleted(1, 70)
    let normal = getRandomCompleted(1, 100-good)
    let bad = 100 - normal - good 
    item.id = id
    item.name = names[index]
    item.probability = [bad, normal, good]
    item.price = getRandomCompleted(100000, 5000000)
    item.count = getRandomCompleted(500, 1500)
    res.push(item)
  })
  return res
}

export function get_type() {
  return {
    diagnostics: {
      name: 'Диагностика',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    },
    antitumor_therapy: {
      name: 'Лекартвенная противоопухолевая терапия',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    },
    radiation_therapy: {
      name: 'Лучевая терапия',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    },
    nonspecific_treatment: {
      name: 'Неспецифическое лечение',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    },
    chemoradiotherapy: {
      name: 'Химиолучевая терапия',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    },
    surgery: {
      name: 'Хирургическое лечение',
      probability: [
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'good' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'normal' },
        { bgcolor: '#778077', completed: getRandomCompleted(), status: 'bad' }
      ]
    }
  }
}
