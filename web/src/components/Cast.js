import React, { Component } from 'react';
import Modal from './Modal';
import characters from '../../data/characters.json';

import styles from './Cast.module.css';

class Cast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    const { cast } = this.props;
    const { isModalOpen, actorSelected } = this.state;
    return (
      <>
        <div id="production" className="box box_6">
          <div>
            <h2>Production</h2>
            <div>
              <span>Director</span>
              {cast.director}
            </div>
            <div>
              <span>Writer</span>
              {cast.writer}
            </div>
            <div>
              <span>Costumes</span>
              {cast.costumes}
            </div>
          </div>
        </div>
        <div id="cast" className="box_5">
          <div className="rotate">
            <h2>Cast</h2>
            <div className="rotate--alt">
              {cast.cast.map(c => {
                const name = c.split(' - ');
                return (
                  <div
                    style={{ cursor: 'pointer' }}
                    key={name[0]}
                    onClick={() => {
                      const actorSelected = characters.find(
                        c => c.name === name[0],
                      );
                      if (actorSelected) {
                        this.setState({
                          isModalOpen: true,
                          actorSelected,
                        });
                      }
                    }}
                  >
                    <span>{name[1]}</span>
                    {name[0]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            onClose={() => {
              this.setState({ isModalOpen: false });
              return false;
            }}
          >
            <div>
              <div className={styles.header}>
                <img src={`/imgs/headshots/${actorSelected.name}.png`} />
                <div>
                  <div className={styles.name}>{actorSelected.name}</div>
                  <div className={styles.role}>{actorSelected.role}</div>
                </div>
              </div>
              <div>
                {actorSelected.blurp &&
                  actorSelected.blurp.map((b, i) => <p key={i}>{b}</p>)}
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default Cast;
