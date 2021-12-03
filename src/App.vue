<template>
  <div id="app">
    <div id="wrapper">
      <div class="container">
        <router-view />
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <router-link to="/">ItemSzop</router-link> - Darmowy sklep serwera
          minecraftowego. Wykonanie
          <a href="https://github.com/michaljaz">Michał Jażdżyk</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
