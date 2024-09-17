import { Button } from 'components/lib';

export function Welcome(props){

  return (
    <>
        <Button text='Get The Full Boilerplate' action={ () => window.open('https://usegravity.app') } size="small"  tone="primary" />
    </>
  )
}