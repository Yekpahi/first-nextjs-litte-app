//our-domain.com/
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1> The News page</h1>
      <ul>
        <li>
          <a href="/news/apitest">Click Me</a>
        </li>
        <Link href="/news/details">
        Click Me 2
        </Link>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
