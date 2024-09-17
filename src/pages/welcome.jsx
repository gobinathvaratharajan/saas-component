import { Button, Link, Card } from 'components/lib';

export function Welcome(props) {
  return (
    <>
      <Card>
        <Link url="/">Go Home</Link>
        <Link url="/home">Go Home</Link>
      </Card>
      <Button
        text="Get The Full Boilerplate"
        action={() => window.open('https://usegravity.app')}
        size="small"
        tone="primary"
      />
    </>
  );
}
