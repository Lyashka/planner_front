<template>
  <main>
    <table class="excel_table">
      <thead>
        <!-- Header -->
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>L</th>
          <th>M</th>
          <th>N</th>
          <th>O</th>
          <th>P</th>
          <th>Q</th>
          <th>R</th>
          <th>S</th>
          <th>T</th>
          <th>U</th>
          <th>V</th>
        </tr>
        <tr>
          <th>1</th>
          <td id="A1-2" rowspan="2" class="blue_panel">Дата</td>
          <td id="BC-1" colspan="2" class="blue_panel">Количество работающих</td>
          <td id="DE-1" colspan="2" class="blue_panel">Проверка количества</td>
          <td id="F"></td>
          <td colspan="15" class="green_panel">Наработка ГТД</td>
          <td id="V"></td>
          <td colspan="15" class="ligth_green_panel">
            Соcтояние ГПА: Р-резерв, М- магистраль, (+24 час), О-Отанов (+16 час), П-пуск (+8 час),
            ТО1, ТО2, СР, КР, замены двигателя (ГТД), ДУС (ДС), ОГК (ГК), трансмиссии (ТР)
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td id="B2" class="blue_panel">ступень 1</td>
          <td id="C2" class="blue_panel">ступень 2</td>
          <td id="D2" class="blue_panel">1 ст</td>
          <td id="E2" class="blue_panel">2 ст</td>
          <td id="F"></td>
          <td class="green_panel">1</td>
          <td class="green_panel">2</td>
          <td class="green_panel">3</td>
          <td class="green_panel">4</td>
          <td class="green_panel">9</td>
          <td class="green_panel">10</td>
          <td class="green_panel">11</td>
          <td class="green_panel"></td>
          <td class="green_panel">5</td>
          <td class="green_panel">6</td>
          <td class="green_panel">7</td>
          <td class="green_panel">8</td>
          <td class="green_panel">12</td>
          <td class="green_panel">13</td>
          <td class="green_panel">14</td>
          <td id="V"></td>
          <td class="ligth_green_panel">1</td>
          <td class="ligth_green_panel">2</td>
          <td class="ligth_green_panel">3</td>
          <td class="ligth_green_panel">4</td>
          <td class="ligth_green_panel">9</td>
          <td class="ligth_green_panel">10</td>
          <td class="ligth_green_panel">11</td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel">5</td>
          <td class="ligth_green_panel">6</td>
          <td class="ligth_green_panel">7</td>
          <td class="ligth_green_panel">8</td>
          <td class="ligth_green_panel">12</td>
          <td class="ligth_green_panel">13</td>
          <td class="ligth_green_panel">14</td>
        </tr>

        <!-- Under header -->
        <tr>
          <th class="ligth_blue_panel" style="background-color: white">3</th>
          <td class="ligth_blue_panel">2023</td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel">План</td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>

          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
        </tr>

        <tr class="ligth_blue_panel">
          <th style="background-color: white">4</th>
          <td>2023</td>
          <td></td>
          <td></td>
          <td>Расчет</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>2023</td>
          <td></td>

          <td class="ligth_green_panel">6104</td>
          <td class="ligth_green_panel">7592</td>
          <td class="ligth_green_panel">7088</td>
          <td class="ligth_green_panel">5480</td>
          <td class="ligth_green_panel">6320</td>
          <td class="ligth_green_panel">4256</td>
          <td class="ligth_green_panel">1936</td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel">4480</td>
          <td class="ligth_green_panel">7336</td>
          <td class="ligth_green_panel">3880</td>
          <td class="ligth_green_panel">6184</td>
          <td class="ligth_green_panel">3960</td>
          <td class="ligth_green_panel">4392</td>
          <td class="ligth_green_panel">1912</td>
        </tr>

        <tr>
          <th style="background-color: white">5</th>
          <td class="ligth_blue_panel">2024</td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel">План</td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>
          <td class="ligth_blue_panel"></td>

          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel"></td>
        </tr>

        <tr class="ligth_blue_panel">
          <th style="background-color: white">6</th>
          <td>2024</td>
          <td></td>
          <td></td>
          <td>Расчет</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>2024</td>
          <td></td>

          <td class="ligth_green_panel">7704</td>
          <td class="ligth_green_panel">6480</td>
          <td class="ligth_green_panel">6480</td>
          <td class="ligth_green_panel">5160</td>
          <td class="ligth_green_panel">5856</td>
          <td class="ligth_green_panel">3456</td>
          <td class="ligth_green_panel">1176</td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel">4056</td>
          <td class="ligth_green_panel">6768</td>
          <td class="ligth_green_panel">2832</td>
          <td class="ligth_green_panel">5496</td>
          <td class="ligth_green_panel">2712</td>
          <td class="ligth_green_panel">3744</td>
          <td class="ligth_green_panel">2736</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in array_data" :key="item.id" @click="setFocusElem(item)">
          <th style="background-color: white">{{}}</th>
          <td>{{ item.date }}</td>
          <td>{{ item.number_workers.first_stage }}</td>
          <td>{{ item.number_workers.second_stage }}</td>
          <td>{{ item.check_number.first_stage }}</td>
          <td>{{ item.check_number.second_stage }}</td>
          <td></td>
          <td>{{ item.work_gtd[0].work_1 }}</td>
          <td>{{ item.work_gtd[0].work_2 }}</td>
          <td>{{ item.work_gtd[0].work_3 }}</td>
          <td>{{ item.work_gtd[0].work_4 }}</td>
          <td>{{ item.work_gtd[0].work_9 }}</td>
          <td>{{ item.work_gtd[0].work_10 }}</td>
          <td>{{ item.work_gtd[0].work_11 }}</td>
          <td>|</td>
          <td>{{ item.work_gtd[0].work_5 }}</td>
          <td>{{ item.work_gtd[0].work_6 }}</td>
          <td>{{ item.work_gtd[0].work_7 }}</td>
          <td>{{ item.work_gtd[0].work_8 }}</td>
          <td>{{ item.work_gtd[0].work_12 }}</td>
          <td>{{ item.work_gtd[0].work_13 }}</td>
          <td>{{ item.work_gtd[0].work_14 }}</td>

          <td></td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_1" @click="setStatus1" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_2" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_3" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_4" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_9" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_10" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_11" />
          </td>
          <td class="ligth_green_panel"></td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_5" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_6" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_7" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_8" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_12" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_13" />
          </td>
          <td class="ligth_green_panel">
            <SelectForCellVue :status="item.status_gpa[0].status_14" />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import SelectForCellVue from '../components/SelectForCell.vue'
import { useDataStrore } from '../stores/dataStore'

export default {
  components: {
    SelectForCellVue
  },
  data() {
    return {}
  },
  setup() {
    const array_data = useDataStrore().array_data
    const data = useDataStrore()
    console.log(array_data)
    return {
      array_data,
      data
    }
  },
  methods: {
    setFocusElem(item) {
      this.data.focus_row = item
      console.log(this.data.focus_row)
    },

    setStatus1() {
      console.log()
    }
  }
}
</script>

<style lang="scss">
.excel_table {
  border-collapse: collapse;
  td,
  th {
    text-align: center;
    border: 1px solid black;
    padding: 8px;
  }
}
.blue_panel {
  text-align: center;
  background-color: rgba(0, 0, 255, 0.4);
}

.green_panel {
  text-align: center;
  background-color: rgba(0, 128, 0, 0.6);
}
.ligth_blue_panel {
  text-align: center;
  background-color: rgba(0, 0, 255, 0.1);
}
.ligth_green_panel {
  padding: 0;
  text-align: center;
  background-color: rgba(0, 128, 0, 0.2);
}
</style>
