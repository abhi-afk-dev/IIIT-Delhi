from flask import Flask, request, jsonify,render_template,send_from_directory
import os

app = Flask(__name__)

@app.route('/amount/')
def amount():
    return render_template('amount.html')

@app.route('/analytics/')
def analytics():
    return render_template('analytics.html')

@app.route('/')
def index():
    return send_from_directory('.','index.html')

@app.route('/payment/')
def payment():
    return render_template('payment.html')

@app.route('/payment_gate/')
def payment_gate():
    return render_template('payment_gate.html')

@app.route('/scanner/')
def scanner():
    return render_template('scanner.html')

@app.route('/stat/')
def stat():
    return render_template('stat.html')



if __name__ == '__main__':
    app.run(debug=True)


