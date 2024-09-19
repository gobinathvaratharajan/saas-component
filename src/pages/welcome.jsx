import {
  Banner,
  Link,
  Card,
  EmptyState,
  Dropdown,
  Table,
} from 'components/lib';

export function Welcome(props) {
  const items = ['item1', 'item2'];
  const headers = ['Name', 'Age', 'Email'];
  const data = [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    { Name: 'Alice Johnson', Age: 24, Email: 'alice@example.com' },
    // Add more rows as needed
  ];
  return (
    <>
      {/* <Button text="Click" tone="primary" size="medium" /> */}
      <Table headers={headers} data={data} />
      <Banner
        title="welcome"
        description="welcome to my component lib"
        tone="warning"
      />
      <Link title="Click 2" />
      <Card title="card" />
      <Dropdown items={items} title="auto" />
      <EmptyState
        image="../../public/assets/no data found.jpg"
        title="No data found"
      />
    </>
  );
}
