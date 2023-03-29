import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'



const useStyles = makeStyles(theme => ({
	root: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	container: {
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	}
}))

const Register = () => {
	const [body, setBody] = useState({ name: '', user: '' , password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Register now!!</Typography>
					<form className={classes.form} id="formLogin" action="/login" method="POST">
                    <TextField
							fullWidth
							autoFocus
                            type='texto'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Name'
							name='name'
                            id="floatingInput"
							value={body.name}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							autoFocus
                            type='texto'
							color='primary'
							margin='normal'
							variant='outlined'
							label='User'
							name='user'
                            id="user"
							value={body.user}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='pass'
                            id='pass'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.button}
                            type="submit"
							onClick={() => onSubmit()}
						>Sign In</Button>
                        <Button
							fullWidth
							variant='contained'
							color='primary'
							className={classes.button}
                            type="submit"
							onClick={() => onSubmit()}
						>Register</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default Register