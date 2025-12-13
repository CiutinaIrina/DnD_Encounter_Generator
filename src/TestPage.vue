<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="test-page">
      <nav>
		<div class="test-page-links">
			<h3> Basic Components </h3>
			<RouterLink class="router-link" to="/box">Test Box</RouterLink>
			<br>
			<RouterLink class="router-link" to="/button">Test Button</RouterLink>
			<br>
			<RouterLink class="router-link" to="/icon">Test Icon</RouterLink>
			<br>
			<RouterLink class="router-link" to="/input">Test Input</RouterLink>
			<br>
			<RouterLink class="router-link" to="/list">Test List</RouterLink>
			<br>
			<RouterLink class="router-link" to="/popup">Test Popup</RouterLink>
			<br>
			<RouterLink class="router-link" to="/dropdown-menu">Test Dropdown Menu</RouterLink>
			<br>
      <RouterLink class="router-link" to="/dot">Test Dot</RouterLink>
      <br>
			<h3> Advanced Components </h3>
			<RouterLink class="router-link" to="/compendium">Test Compendium</RouterLink>
			<br>
			<RouterLink class="router-link" to="/icon-menu">Test Icon Menu</RouterLink>
			<br>
			<RouterLink class="router-link" to="/object-displayer">Test Object Displayer</RouterLink>
			<br>
			<RouterLink class="router-link" to="/object-loader">Test Object Loader</RouterLink>
			<br>
			<h3>Objects</h3>
			<RouterLink class="router-link" to="/dungeon">Test Dungeon</RouterLink>
			<br>
			<RouterLink class="router-link" to="/encounter">Test Encounter</RouterLink>
			<br>
			<RouterLink class="router-link" to="/monster">Test Monster</RouterLink>
			<br>
      <RouterLink class="router-link" to="/theme-selector">Test Theme Selector</RouterLink>
      <br>
		</div>
      </nav>
      <div class="test-page-content">
        <RouterView />
      </div>
    </div>
</template>

<style scoped>
h3 {
	color: rgb(194, 194, 194);
}
.test-page {
	height: 100vh;
	width: 100%;
	display: flex;
	background: rgb(100, 105, 192);
	background-size: cover;
	background-position: center;

	nav {
		background: rgba(12, 12, 71, 0.791);
		background-size: cover;
		background-position: center;
		height: 100vh;
		width: 15%;

		.test-page-links {
			padding: 1rem;

			.router-link {
				color: rgb(233, 218, 119);
				text-decoration: none;
				font-size: 1.10rem;
				padding: 0.5rem;
			}
		}
	}

	.test-page-content {
		color: black;
		padding: 1.5rem;
	}
}

</style>
