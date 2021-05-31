import React, { Component } from 'react';

class Kontak extends Component {
    render(){
        return(
            <div className="banner-txt">
                <h2>Halaman Kontak</h2>
            <form>
            <label for="email">Email</label><br />
            <input type="email" name="email" placeholder="alamat email"/>
            <br />
            <label for="message">Pesan</label><br />
            <textarea name="message" placeholder="Tulis pesan anda..." rows="4" cols="80"></textarea>
            <br />
            <br />
            <input type="submit" value="Kirim" />
        </form>
    </div>
        )
    }
}

export default Kontak;