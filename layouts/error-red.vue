<template>
     <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
            <br><br>
			<h2 v-if="statusCode === 404">404 - Page not found</h2>
			<h2 v-else>Wystąpił błąd</h2>
            <p>Niestety strona o podanym adresie nie istnieje</p>
            <nuxt-link to="/">Home page</nuxt-link>
		</div>
	</div>
</template>