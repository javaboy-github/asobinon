/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/IconEdit';

// added by sasigume
import styles from './EditThisPage.module.css';

export default function EditThisPage({ editUrl }) {
  const historyUrl =
    'https://github.com/aelyone/asobinon/commits/main/website' +
    editUrl.replace('https://client.asobinon.org/edit?path=', '');
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.linkFilled}
        href={editUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconEdit />
        <Translate
          id="theme.common.editThisPage"
          description="The link label to edit the current page"
        >
          Edit this page
        </Translate>
      </a>
      <a
        className={styles.link}
        href={historyUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconEdit />
        <Translate
          id="theme.common.editHistory"
          description="The link label to view the edit history of the current page"
        >
          View edit history of this page
        </Translate>
        {` `}
      </a>
    </div>
  );
}
