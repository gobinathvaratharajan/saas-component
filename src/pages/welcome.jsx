import { Button, Link, Card, EmptyState, Dropdown } from 'components/lib';

export function Welcome(props) {
  const items = ['item1', 'item2'];
  return (
    <>
      <Button text="Click" tone="primary" size="medium" />
      {/* <Link title="Click 2" />
        <Card title="card" />
        <Dropdown items={items} title="auto" />
        <EmptyState image="../../public/assets/no data found.jpg" title="No data found" /> */}
    </>
  );
}
