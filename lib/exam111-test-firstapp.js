'use babel';

import Exam111TestFirstappView from './exam111-test-firstapp-view';
import { CompositeDisposable } from 'atom';

export default {

  exam111TestFirstappView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.exam111TestFirstappView = new Exam111TestFirstappView(state.exam111TestFirstappViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.exam111TestFirstappView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'exam111-test-firstapp:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.exam111TestFirstappView.destroy();
  },

  serialize() {
    return {
      exam111TestFirstappViewState: this.exam111TestFirstappView.serialize()
    };
  },

  toggle() {
    console.log('Exam111TestFirstapp was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
