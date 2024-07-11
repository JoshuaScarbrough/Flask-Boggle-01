from flask import Flask, render_template, session, request, jsonify
from boggle import Boggle
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
app.debug = True
debug = DebugToolbarExtension(app)
boggle_game = Boggle()


@app.route('/')
def home_page():
    # I got stuck on this line. The reason I got stuck is because I had the line
    # written as Boggle.make_board. 

    # There is a few things I did incorrectly. The first is that I didnt realize that 
    # I had already gave Boggle a name of boggle_game, so I shouldve used that. Also 
    # I needed to use my () at the end of Boggle and make_board.
    create_board = boggle_game.make_board()

    # Creation of a session. Remeber a session is what helps store values and data
    # The syntax of session creation needs to be as such. Your assigning the created board
    # to a session which is given the name ['create_board']
    session['create_board'] = create_board

    return render_template('base.html', create_board = create_board)

@app.route('/check-guess')
def check_guess():
    
    guess = request.args['wordsubmit']
    board = session['create_board']
    response = boggle_game.check_valid_word(board, guess)

    return jsonify({'result': response})






if __name__ == '__main__':
    app.run(debug=True)