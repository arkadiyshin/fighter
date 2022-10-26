## The game Fighter 

### ER Diagram

```mermaid
erDiagram

USERS{
  int id PK
  string username
  string password_hash
  int level
  int experience
  int health
  int strength
  int dexterity
  int intuition
}

ENEMIES{
  int id PK
  string name
  int level
  int health
  int strength
  int dexterity
  int intuition
}

```
