<style scoped>
  .container {
    width: 100%
  }
  .container header {
    border-bottom: 1px solid black;
  }
  .container header h1 {
    padding: 10px;
    display: inline-block;
    font-weight: 300;
  }
  .container header input {
    float: right;
    margin-top: 15px;
    margin-right: 20px;
    padding: 5px;
    border: none;
    outline: none;
    border-left: 1px solid black;
  }
  table {
    padding: 10px;
    margin: 10px auto;
  }
  table th {
    border-bottom: 1px solid black;
    width: 20%
  }
  table th, td {
    padding: 5px;
    text-align: center;
  }
  table input {
    border: none;
    outline: none;
    text-align: center
  }
  table input:focus {
    border: 1px solid grey;
    padding: 1px;
  }
</style>

<template>
  <div class="container">
    <header>
      <h1>Model Name</h1>
      <input type="search" placeholder="Filter through documents..." />
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in data">
            <td><input v-model="user.username" /></td>
            <td><input v-model="user.fullName" /></td>
            <td><input v-model="user.age" /></td>
            <td><input v-model="user.role" /></td>
            <td><input v-model="user.birthday" /></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
            username: 'SimulatedGREG',
            fullName: 'Greg Holguin',
            age: 20,
            role: 'Admin',
            birthday: '29/01/96'
          },
          {
            username: 'AkiraLaine',
            fullName: 'Akira Laine',
            age: 18,
            role: 'Admin',
            birthday: '09/05/98'
          },
          {
            username: 'JackeL',
            fullName: 'David Kaiser',
            age: 95,
            role: 'Baker',
            birthday: '27/12/84'
          }
        ]
      }
    }
  }
</script>
