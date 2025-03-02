import React, { useEffect, useState } from "react";

// Tipos para os dados da API
interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: {
    uuid: string;
    username: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: Picture;
  nat: string;
}

interface ApiResponse {
  results: User[];
}

// Componente React
const PageApi: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [cont, setCont] = useState(1)

  useEffect(() => {
    if (cont > 0) {
      fetch(`https://randomuser.me/api/?results=${cont}`)
        .then((response) => response.json())
        .then((data: ApiResponse) => setUsers(data.results));
    }
  }, [cont]); // Agora a requisição ocorre sempre que `cont` muda

  // Atualiza a quantidade de usuários a serem renderizados
  function contPeople(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setCont(value < 1 ? 1 : value); // Impede valores menores que 1
  }
  return (
    <div className="page-api">
      <input 
        className="input-cont" 
        type="number" 
        placeholder="Quantidade de usuários"
        onChange={contPeople}
      />
      <h1>Lista de Usuários</h1>
      <div className="card-container">
        {users.map((user) => (
          <figure  className="card__item" key={user.login.uuid}>
            <img  className="card__img" src={user.picture.thumbnail} alt={user.name.first} />
            <figcaption className="card__info">
              <h2 className="card__name" > {user.name.first} {user.name.last}</h2>
              <p className="card__age" >Idade: {user.dob.age}</p>
              <p className="card__email">{user.email}</p>
              <p className="card__location">Localização: {user.location.city}, {user.location.country}</p>
              <p className="card__phone">phone: {user.phone}</p>
            </figcaption>

          </figure>
        ))}
      </div>
    </div>
  );
};

export default PageApi;
