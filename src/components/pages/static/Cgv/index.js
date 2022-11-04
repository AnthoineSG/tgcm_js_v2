import { memo } from 'react';

import cgvData from 'src/data/cgvData';

import './cgv.scss';

function Cgv() {
  return (
    <main className="cgv">
      <h2 className="cgv-title">Conditions Générales de Vente</h2>
      {cgvData.map((article) => (
        <div className="cgv__article" key={article.id}>
          <h3 className="cgv__article-title">
            {article.title} - {article.sub_title}
          </h3>
          <div className="cgv__article-content">{article.content}</div>
        </div>
      ))}
    </main>
  );
}

export default memo(Cgv);
