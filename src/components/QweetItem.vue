<template>
  <q-item class="qweet q-py-md">
    <q-item-section avatar top>
      <q-avatar size="xl">
        <img :src="gravatarAvatarUrl">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        <strong>Danny Connell</strong>
        <span class="text-grey-7">
          @danny__connell 
          <br class="lt-md">&bull; {{ qweet.date | relativeDate }}
        </span>
      </q-item-label>
      <q-item-label class="qweet-content text-body1">{{ qweet.content }}</q-item-label>
      <div class="qweet-icons row justify-between q-mt-sm">
        <q-btn
          color="grey"
          icon="far fa-comment"
          size="sm"
          flat
          round
        />
        <q-btn
          color="grey"
          icon="fas fa-retweet"
          size="sm"
          flat
          round
        />
        <q-btn
          @click="$emit('toggle-liked', qweet)"
          :color="qweet.liked ? 'pink' : 'grey'"
          :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
          size="sm"
          flat
          round
        />
        <q-btn
          @click="$emit('delete', qweet)"
          color="grey"
          icon="fas fa-trash"
          size="sm"
          flat
          round
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { formatDistance } from 'date-fns'
import { GRAVATAR_AVATAR_URL } from 'src/config'

export default {
  name: 'QweetItem',
  props: {
    qweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      gravatarAvatarUrl: GRAVATAR_AVATAR_URL
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  }
}
</script>

<style lang="sass">
.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
