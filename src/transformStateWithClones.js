'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateDublicate = { ...state };
  const result = [];

  for (const property of actions) {
    switch (property.type) {
      case 'addProperties':
        Object.assign(stateDublicate, property.extraData);
        break;

      case 'removeProperties':
        for (const names of property.keysToRemove) {
          delete stateDublicate[names];
        }
        break;

      case 'clear':
        for (const allProprety in stateDublicate) {
          delete stateDublicate[allProprety];
        }
    }
    result.push({ ...stateDublicate });
  }

  return result;
}

module.exports = transformStateWithClones;
