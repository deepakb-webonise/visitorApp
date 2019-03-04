/*
 * action types
 */
var id = 0;
export const ADD_VISITOR = "ADD_VISITOR";
export const OUT_VISITOR = "OUT_VISITOR";

/*
 * action creators
 */

export function addVisitor(visitor) {
  return { type: ADD_VISITOR, payload: { ...visitor, id: ++id } };
}
export function outVisitor(id) {
  return { type: OUT_VISITOR, payload: { id } };
}
