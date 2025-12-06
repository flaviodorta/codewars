class Warrior {
  constructor() {
    this._ranks = [
      "Pushover",
      "Novice",
      "Fighter",
      "Warrior",
      "Veteran",
      "Sage",
      "Elite",
      "Conqueror",
      "Champion",
      "Master",
      "Greatest",
    ];

    this._experience = 100;
    this._level = 1;
    this._rank = this._getRankFromLevel(this._level);
    this._achievements = [];
  }

  level() {
    return this._level;
  }

  experience() {
    return this._experience;
  }

  rank() {
    return this._rank;
  }

  achievements() {
    return this._achievements;
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    }

    const myLevel = this._level;
    const myRankIndex = this._getRankIndexFromLevel(myLevel);
    const enemyRankIndex = this._getRankIndexFromLevel(enemyLevel);

    const diff = enemyLevel - myLevel;

    if (enemyRankIndex > myRankIndex && diff >= 5) {
      return "You've been defeated";
    }

    let gainedXP = 0;

    if (diff === 0) {
      gainedXP = 10;
    } else if (diff === -1) {
      gainedXP = 5;
    } else if (diff <= -2) {
      gainedXP = 0;
    } else if (diff > 0) {
      gainedXP = 20 * diff * diff;
    }

    this._addExperience(gainedXP);

    if (myLevel - enemyLevel >= 2) {
      return "Easy fight";
    } else if (enemyLevel > myLevel) {
      return "An intense fight";
    } else {
      return "A good fight";
    }
  }

  training([description, exp, minLevel]) {
    if (this._level >= minLevel) {
      this._addExperience(exp);
      this._achievements.push(description);
      return description;
    } else {
      return "Not strong enough";
    }
  }

  _addExperience(amount) {
    if (amount <= 0) return;

    this._experience = Math.min(10000, this._experience + amount);

    this._level = Math.floor(this._experience / 100);
    if (this._level < 1) this._level = 1;
    if (this._level > 100) this._level = 100;

    this._rank = this._getRankFromLevel(this._level);
  }

  _getRankIndexFromLevel(level) {
    const idx = Math.floor(level / 10);
    return Math.min(idx, this._ranks.length - 1);
  }

  _getRankFromLevel(level) {
    return this._ranks[this._getRankIndexFromLevel(level)];
  }
}