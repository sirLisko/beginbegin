import React, { Component } from 'react';
import Modal from './Modal';

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
        <div id="cast" className="box_5">
          <div className="rotate">
            <h2>Cast</h2>
            <div className="rotate--alt">
              {cast.map(({ name, role }) => {
                return (
                  <div
                    style={{ cursor: 'pointer' }}
                    key={name}
                    onClick={() => {
                      const actorSelected = cast.find(c => c.name === name);
                      if (actorSelected) {
                        this.setState({
                          isModalOpen: true,
                          actorSelected,
                        });
                      }
                    }}
                  >
                    <span>{role}</span>
                    {name}
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
                {actorSelected.image && (
                  <img src={actorSelected.image.asset.fixed.src} />
                )}
                <div>
                  <div className={styles.name}>{actorSelected.name}</div>
                  <div className={styles.role}>{actorSelected.role}</div>
                </div>
              </div>
              <div>
                {actorSelected.bio &&
                  actorSelected.bio.map((b, i) => (
                    <p key={i}>{b.children[0].text}</p>
                  ))}
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default Cast;
