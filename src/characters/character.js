export default class Character {
  constructor(name, attack, defence) {
    this.name = name;
    this.type = this.__proto__.constructor.name;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this._name = name;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Несуществующий персонаж');
    }
    this._type = type;
  }
}
