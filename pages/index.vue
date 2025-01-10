<script setup lang="ts">
useSeoMeta({
  title: "Emilioxrenders",
  // description: "description",
  // ogImage: "/",
});
</script>

<template>
  <!-- section -->
  <div class="flex justify-center items-center bg-white">
    <Container>
      <div
        class="gap-10 flex-col-reverse lg:gap-20 lg:items-center lg:flex-row flex"
      >
        <NuxtImg
          src="/images/profile.webp"
          alt="Profile"
          class="max-w-sm rounded-sm shadow w-full"
        />
        <div class="flex flex-col gap-10">
          <h1 class="text-4xl">Turning Ideas into Stories</h1>
          <div class="flex flex-col gap-5">
            <p>
              Hi there! I'm Emilio, a passionate copywriter specialized in
              articles, blogs, and SEO writing. Whether you need captivating
              articles, persuasive copy, or creative content solutions, you've
              come to the right place. Take a look at some of my latest articles
              below, or reach out to me directly at
              <NuxtLink
                to="mailto:emilioxrenders@gmail.com"
                class="relative after:w-full after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-0 after:ease-in-out after:bottom-0"
              >
                emilioxrenders@gmail.com</NuxtLink
              >!
            </p>
          </div>
        </div>
      </div>
    </Container>
  </div>

  <!-- section -->
  <div class="flex justify-center items-center bg-primary">
    <Container>
      <div class="flex flex-col gap-10 lg:w-1/2">
        <h2 class="text-3xl">Explore my Work</h2>
        <p>
          Discover various writing projects that showcase my skills and offer a
          unique perspective on different topics.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <Card
          link="/articles/finding-inspiration-in-everyday-life"
          image="life.webp"
          alt="Inspiration"
        >
          Finding Inspiration in Everyday Life
        </Card>

        <Card
          link="/articles/touching-grass"
          image="grass.webp"
          alt="Touching Grass"
        >
          Touching Grass: a Step by Step Guide
        </Card>

        <Card
          link="/articles/dungeons-and-dragons"
          image="dnd.webp"
          alt="Dungeons & Dragons"
        >
          Dungeons & Dragons: Enhancing Creativity, Cognition, and Connection
        </Card>

        <Card
          link="/articles/seasonal-affective-disorder"
          image="sad.webp"
          alt="Seasonal Affective Disorder"
        >
          Seasonal Affective Disorder: a Comprehensive Overview
        </Card>
      </div>
    </Container>
  </div>

  <!-- section -->
  <div class="flex justify-center items-center bg-white">
    <Container>
      <div class="flex flex-col gap-10 lg:w-1/2">
        <h2 class="text-3xl">Let's Collaborate</h2>
        <p>
          Ready to bring your ideas to life? Whether you need captivating
          articles, persuasive copy, or creative content solutions, I'm here to
          help. Feel free to connect with me directly at
          <NuxtLink
            href="mailto:emilioxrenders@gmail.com"
            class="relative after:w-full after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-0 after:ease-in-out after:bottom-0"
          >
            emilioxrenders@gmail.com</NuxtLink
          >!
        </p>
      </div>
    </Container>
  </div>
</template>
