## The game Fighter 

### Wireframe

![wireframe](./planning/wireframe.png)

### Backlog
https://github.com/users/arkadiyshin/projects/7/

### External API 

https://akabab.github.io/superhero-api/

### ER Diagram

```mermaid
erDiagram

USERS ||--|{ AVATARS : "use"
ENEMIES ||--|{ AVATARS : "use"
USERS ||--|{ LEVELS : "use"
ENEMIES ||--|{ LEVELS : "use"
TILES |{--|| TILE_TYPES : "use"

USERS{
  int id PK
  string username
  string password_hash
  int level
  int experience
  int free_points
  int health
  int strength
  int dexterity
  int intuition
  int avatar_id
}

ENEMIES{
  int id PK
  string name
  int level
  int health
  int strength
  int dexterity
  int intuition
  int avatar_id
}

AVATARS{
  int id PK
  string avatar_url
  enum alignment "good|bad"
}

LEVELS{
  int level PK
  int experience
  int free_points
}

TILE_TYPES{
  int id PK
  string title
  bool crossable
}

TILES{
  int x "PK x + y"
  int y
  int tile_type_id FK
}
```

### API 

### USERS

#### POST /users/signup
> - body
>   - username
>   - password

> - response
>   - 201: created
  
  
#### POST /users/login
> - body
>   - username
>   - password

> - response
>   - 202: success


#### GET /users/:id
> - responce 
>   - 200:
>   - username
>   -  evel
>   - experience
>   - free_points
>   - health
>   - strength
>   - dexterity
>   - intuition  
>   - avatar


#### PUT /users/:id/profile
> - body
>   - avatar_id

> - responce
>   - 202: success
>   

#### PUT /users/:id/skills
> - body
>   - free_points
>   - health
>   - strength
>   - dexterity
>   - intuition
  
> - responce
>   - 202: success


### GAME

#### GET /games/start
> - query
>   - level_min
>   - level_max

> - responce
>   - 200:
>   - enemy_name
>   - enemy_level
>   - enemy_health
>   - enemy_strength
>   - enemy_dexterity
>   - enemy_intuition
>   - enemy_avatar_url
>   

#### POST /games/finish/:player_id
> - body
>   - player_id
>   - player_health
>   - enemy_id
>   - enemy_health

> - responce
>   - 202:
>   - experince
>   - level
>   - free_points


### AVATARS

#### GET /avatars/
> - responce 
>   - 200:
>   - id
>   - avatar_url
