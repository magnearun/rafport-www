import React, { Children, cloneElement, useState } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Drawer, Divider } from 'antd'

import _get from 'lodash/get';

import s from './ProductNavigation.scss';

const query = graphql`
  query GroupsQuery {
    prismicHome {
      data {
        collection_groups {
          collection_group {
            document {
              data {
                name {
                  text
                }
                collections {
                  collection {
                    document {
                      uid
                      data {
                        name {
                          text
                        }
                        products {
                          product {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function ProductNavigation(initialIsOpen: boolean) {

  const [isOpen, toggle] = useState(initialIsOpen);

  return [
    isOpen,
    toggle,
    (
      <StaticQuery query={query}>
        {(res) => {
          console.log('ProductNavigation', res);
          const groups = _get(res, 'prismicHome.data.collection_groups', []);

          return (
            <Drawer
              placement="top"
              width="100vh"
              height="auto"
              onClose={() => toggle(!isOpen)}
              visible={isOpen}
            >
              <nav className={s.nav__panel}>
                <div className={s.nav__container}>
                  <h2 className={s.nav__heading}>Vörur</h2>

                  <Divider />
                  <div className={s.nav__row}>
                    {groups.map(({ collection_group: { document: doc }}: any) => {
                      return doc.map(({ data: { name, collections  }}: any) => (
                        <div className={s.nav__col}>
                          <div className={s.nav__name}>{name.text}</div>
                          <ul className={s.nav__list}>
                            {collections.map(({ collection: { document: doc }}) => {
                              return doc.map(({ uid, data: { name  }}: any) => (
                                <li className={s.nav__item}>
                                  <Link to={`/collections/${uid}`} onClick={() => toggle(!isOpen)}>
                                    {name.text}
                                  </Link>
                                </li>
                              ));
                            })}
                          </ul>
                        </div>
                      ));
                    })}
                  </div>
                </div>
              </nav>

            </Drawer>
          );
        }}
      </StaticQuery>
    ),
  ];
}
