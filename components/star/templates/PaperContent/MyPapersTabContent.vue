<template>
  <div>
    <ControlBar />
    <div class="relative">
      <div>
        <!-- <div>{{ papers }}</div> -->
        <StarBreadcrumbNav :model="[{ label: '未完成' }]" />
        <section
          class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
          v-if="papers.data"
        >
          <div v-if="papers.isLoading.value">loading?{{ papers.status }}{{ papers.isLoading }}</div>
          <template v-for="paper in p2.data.value" v-else>
            <!-- <template v-for="p in paper"> -->
            <!-- <div>{{ JSON.stringify(p, null, 4) }}</div> -->
            <!-- <StarCardPaperCard :role="item.role" :paper="item.paper" v-for="item in papers" /> -->
            <PaperCard :role="role.role" :paper="paper" />
            <!-- </template> -->
          </template>
        </section>
      </div>
      <div>
        <StarBreadcrumbNav :model="[{ label: '已完成' }]" />
        <section class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          <!-- <StarCardPaperCard ownerName="John Doe" status="ready" />
              <StarCardPaperCard ownerName="John Doe" status="ready" /> -->
        </section>
      </div>
      <StarButton
        :label="$t('ui.showMore')"
        variant="ghost"
        class="min-w-[256px] absolute left-2/4 mt-8 mb-4 -translate-x-1/2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { PaperCard } from "@/components/star/atom";

import ControlBar from "./ControlBar.vue";


</script>
