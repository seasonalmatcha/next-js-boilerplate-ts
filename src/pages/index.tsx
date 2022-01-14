import { Card, Link } from '@/components';

const Home = () => {
  return (
    <div className="bg-zinc-100 px-4 w-screen h-screen flex flex-col justify-center items-center">
      <Card title="Next JS Boilerplate">
        <ul className="list-inside list-disc text-white -indent-6 ml-6">
          <li>
            Using <Link href="https://tailwindcss.com/" label="tailwindcss" /> for styling
          </li>
          <li>
            With pre-configured <Link href="https://eslint.org/" label="eslint" />,{' '}
            <Link href="https://prettier.io/" label="prettier" />, and{' '}
            <Link href="https://commitlint.js.org/" label="commitlint" />
          </li>
          <li>
            Intgration with <Link href="https://typicode.github.io/husky/" label="husky" /> for code
            and commit linting
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Home;
