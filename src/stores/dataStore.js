import { defineStore } from 'pinia'

export const useDataStrore = defineStore('dataStore', {
  state: () => ({
    focus_row: {},
    focus_elem: '',
    array_data: [
      {
        date: '01.11.2023',
        number_workers: {
          first_stage: 5,
          second_stage: 4
        },
        check_number: {
          first_stage: 'ОШ',
          second_stage: ''
        },
        work_gtd: [
          {
            work_1: 16449,
            work_2: 49807,
            work_3: 34079,
            work_4: 38885,
            work_9: 9366,
            work_10: 9859,
            work_11: 9746,
            work_5: 40651,
            work_6: 19763,
            work_7: 15336,
            work_8: 58529,
            work_12: 30309,
            work_13: 26194,
            work_14: 8881
          }
        ],
        status_gpa: [
          {
            status_1: 'О',
            status_2: 'М',
            status_3: 'М',
            status_4: 'М',
            status_9: 'М',
            status_10: 'М',
            status_11: 'М',
            status_5: 'М',
            status_6: 'М',
            status_7: 'Р',
            status_8: 'Р',
            status_12: 'ПР',
            status_13: 'М',
            status_14: 'М'
          }
        ]
      },
      {
        date: '02.11.2023',
        number_workers: {
          first_stage: 5,
          second_stage: 4
        },
        check_number: {
          first_stage: 'ОШ',
          second_stage: ''
        },
        work_gtd: [
          {
            work_1: 16449,
            work_2: 49807,
            work_3: 34079,
            work_4: 38885,
            work_9: 9366,
            work_10: 9859,
            work_11: 9746,
            work_5: 40651,
            work_6: 19763,
            work_7: 15336,
            work_8: 58529,
            work_12: 30309,
            work_13: 26194,
            work_14: 8881
          }
        ],
        status_gpa: [
          {
            status_1: 'М',
            status_2: 'Р',
            status_3: 'М',
            status_4: 'ТО1',
            status_9: 'М',
            status_10: 'М',
            status_11: 'М',
            status_5: 'М',
            status_6: 'М',
            status_7: 'Р',
            status_8: 'Р',
            status_12: 'ПР',
            status_13: 'М',
            status_14: 'М'
          }
        ]
      },

      {
        date: '03.11.2023',
        number_workers: {
          first_stage: 5,
          second_stage: 4
        },
        check_number: {
          first_stage: 'ОШ',
          second_stage: ''
        },
        work_gtd: [
          {
            work_1: 16449,
            work_2: 49807,
            work_3: 34079,
            work_4: 38885,
            work_9: 9366,
            work_10: 9859,
            work_11: 9746,
            work_5: 40651,
            work_6: 19763,
            work_7: 15336,
            work_8: 58529,
            work_12: 30309,
            work_13: 26194,
            work_14: 8881
          }
        ],
        status_gpa: [
          {
            status_1: 'О',
            status_2: 'М',
            status_3: 'М',
            status_4: 'М',
            status_9: 'М',
            status_10: 'М',
            status_11: 'М',
            status_5: 'М',
            status_6: 'М',
            status_7: 'Р',
            status_8: 'Р',
            status_12: 'ПР',
            status_13: 'М',
            status_14: 'М'
          }
        ]
      }
    ],
    count_row: 6
  }),
  actions: {
    updateArrayDataStatus_gpa(focusElem) {
      console.log(focusElem)
      // this.array_data.forEach((item) => {
      //   if (item == focusElem) {
      //     item.status_gpa = focusElem.status_gpa
      //     console.log(true)
      //     console.log(item.status_gpa)
      //     console.log('arrtrue')
      //     console.log(this.array_data)
      //     // return (item.status_gpa = focusElem.status_gpa)
      //   } else {
      //     // console.log(false)
      //     // console.log(item.status_gpa)
      //   }
      // })
    }
  }
})
