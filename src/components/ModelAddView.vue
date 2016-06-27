<style scoped>
  section.container {
    margin-top: 30px;
  }

  section.container .title {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .container {
    margin: 0 auto;
    max-width: 1440px;
    width: calc(100% - 160px);
  }

  .container .subtitle {
    color: rgba(0, 0, 0, .42);
    margin: 40px 0 10px;
  }

  .container .title {
    font-size: 24px;
  }
</style>

<template>
  <div class="container">
    <p class="subtitle">Add New</p>
    <p class="title">Open Donation</p>
  </div>

  <section class="container" v-for="section in entry">
    <p class="title">{{ $key }}</p>
    <div class="input" v-for="field in section">
      <template v-if="field.type === 'string'">
        <label :for="$key">{{ $key }}</label>
        <input :id="$key" type="text" :placeholder="field.default">
      </template>

      <template v-if="field.type === 'number'">
        <label :for="$key">{{ $key }}</label>
        <input :id="$key" type="number" :placeholder="field.default">
      </template>

      <template v-if="field.type === 'string-text-area'">
        <label :for="$key">{{ $key }}</label>
        <textarea :id="$key" rows="3"></textarea>
      </template>

      <template v-if="field.type === 'boolean'">
        <input :id="$key" type="checkbox" :checked="field.default">
        <label :for="$key" class="checkbox-text">{{ $key }}?</label>
      </template>

      <template v-if="field.type === 'date'">
        <label :for="$key">{{ $key }}</label>
        <input :id="$key" type="time">
        <input :id="$key" type="date">
      </template>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        entry: {
          'General Information': {
            'Username': {
              type: 'string',
              default: 'SimulatedGREG'
            },
            'Amount': {
              type: 'number',
              default: '0.00'
            },
            'Message': {
              type: 'string-text-area',
              default: 'Donation Message'
            },
            'Created On': {
              type: 'date',
              default: ''
            },
            'Verified': {
              type: 'boolean',
              default: true
            }
          }
        }
      }
    }
  }
</script>
