## The game Fighter 

### Wireframe

![wireframe](./planning/wireframe.png)

### Backlog
https://github.com/users/arkadiyshin/projects/7/

### API 

### USERS

#### POST /users/signup
body {
  username,
  password
}

response {
  201: created
}  
  
#### POST /users/login
body {
  username,
  password
}

response {
  201: created
}  

#### GET /users/:id

responce {
  username,
  level,
  experience,
  free_points,
  health,
  strength,
  dexterity,
  intuition,
  avatar
}


### GAME

#### GET /games/start/:player_id

responce{
  enemy_name,
  enemy_level,
  enemy_health,
  enemy_strength,
  enemy_dexterity,
  enemy_intuition,
  enemy_avatar
}

#### POST /games/finish/:player_id

body{
  player_id,
  player_health,
  enemy_id,
  enemy_health
}

responce{
  experince,
  level,
  free_points
}


### External API 

https://akabab.github.io/superhero-api/

### ER Diagram

```mermaid
erDiagram

USERS ||--|{ AVATARS : "use"
ENEMIES ||--|{ AVATARS : "use"

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
  blob avatar
  enum alignment "good|bad"
}

```
