<template>
  <div class="columns mt-3">
    <div class="column is-half is-offset-one-quarter">
      <router-link :to="{ name: 'main' }">
        <span class="icon-text ml-2">
          <span class="icon">
            <i class="fas fa-arrow-left"></i>
          </span>
          <span>Powrót do strony głównej</span>
        </span>
      </router-link>
      <div class="box mt-3">
        <router-view />
      </div>
    </div>
  </div>
</template>
