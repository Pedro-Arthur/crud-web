import axios from 'axios'

export const userService = {
  getAll,
  update,
  deleteUser,
  store,
}

async function getAll() {
  const response = await axios.get('http://localhost:3333/users', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response
}

async function update(data) {
  const response = await axios.put(`http://localhost:3333/users/${data.id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response
}

async function store(data) {
  const response = await axios.post('http://localhost:3333/users', data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response
}

async function deleteUser(id) {
  const response = await axios.delete(`http://localhost:3333/users/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return response
}
