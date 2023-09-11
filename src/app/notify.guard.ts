import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  if(confirm("Are You Willing to go back")){
  return true;
  }
  else{
    return false;
  }
};
