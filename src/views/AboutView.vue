<!-- This is the about page, containing a tool tip as an image -->
<template>
  <v-container class="about">
    <v-container class="general-info">
      <h1>Welcome to the Bolivar Cycling Site!</h1>
      <p>
        This page was created in an effort to give citizens of Bolivar and
        surrounding areas information about cycling routes. Although Bolivar is
        not inside of the Osage Plains, it is very close by! This is a great
        region for experienced cyclists and beginners alike to find cycling
        routes and explore the surrounding areas.
      </p>
    </v-container>

    <v-container class="osage-plains">
      <h2>About the Osage Plains:</h2>
      <p>
        The Osage Plains, a region that spans western Missouri, southeastern
        Kansas, central Oklahoma, and north-central Texas, is named after the
        Osage Nation, a Midwestern Native American Tribe. Although much of the
        area is now used for agriculture, it has historically been covered in
        various tall grasses. You can learn more about the Osage Plains
        <a href="https://en.wikipedia.org/wiki/Osage_Plains">here.</a>
      </p>
    </v-container>
    <v-container>
      <v-row justify="center">
        <img v-bind:src="require('@/assets/toolTip.png')" />
      </v-row>
    </v-container>
  </v-container>
</template>

<style>
.about {
  text-align: left;
}

h1 {
  color: black;
}

.general-info {
  text-align: left;
}

.osage-plains {
  text-align: left;
}
.tip1 {
  text-align: left;
}
</style>
