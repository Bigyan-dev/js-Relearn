function checknormalfunction(){
    console.log(this)
}

// checknormalfunction()

const checkarrowfunction = () => (console.log(this))

checkarrowfunction()