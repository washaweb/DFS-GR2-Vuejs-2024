<template>
  <div class="bills">
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Liste des factures</h1>
      </div>
      <div class="col text-end">
        <button @click="onCreateBill()" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2" />
          Ajouter une facture
        </button>
      </div>
    </div>

    <!-- tableau des factures -->
    <TableList>
      <!-- exemple pour personnaliser les th du tableau TableList : -->
      <!-- <template #thead>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
        <th>test</th>
      </template> -->
      <BillTableRow
        v-for="bill in bills"
        :key="bill.id"
        :bill="bill"
        @edit="onEditBill($event)"
        @delete="onDeleteBill($event)"
      />
    </TableList>
  </div>
  <AppDebug :datas="bills" />
</template>

<script>
import BillTableRow from '@/components/tables/BillTableRow.vue'
import TableList from '@/components/tables/TableList.vue'
import { bills } from '@/seeds/bills'
export default {
  components: {
    TableList,
    BillTableRow
  },
  data() {
    return {
      bills
    }
  },
  methods: {
    onEditBill(bill) {
      console.log('edit bill with id: ', bill.id)
      // je change de page programmatiquement avec le $router
      this.$router.push({
        name: 'edit-bill',
        params: {
          id: bill.id
        }
      })
      // autre syntaxe en utilisant le path (dynamique)
      // this.$router.push({ path: `/bill/${bill.id}`  })
    },
    onDeleteBill(bill) {
      console.log('onDeleteBill', bill.id)
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    },
    onCreateBill() {
      this.$router.push({
        name: 'create-bill'
      })
    }
  }
}
</script>
